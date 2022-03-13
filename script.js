function run(){
  let a = CryptoJS.AES.encrypt(SrcText.value, KeyText.value).toString();
  console.log(a);
  write("log.json","write");
}
async function write(path,src){
  const createdBlob = (await octokit.rest.git.createBlob({
    owner,
    repo,
    content: btoa(src),
    encoding: "base64"
  })).data;

  const latestCommit = (await octokit.rest.repos.getBranch({ owner, repo, branch })).data.commit;

  const createdTree = (await octokit.rest.git.createTree({
    owner,
    repo,
    tree: [{
      type: "blob",
      path: path,
      mode: "100644",
      sha: createdBlob.sha
    }],
    base_tree: latestCommit.sha
  })).data;

  const createdCommit = (await octokit.rest.git.createCommit({
    owner,
    repo,
    message: "update file.",
    tree: createdTree.sha,
    parents: [latestCommit.sha],
  })).data;

  await octokit.rest.git.updateRef({
    owner,
    repo,
    ref: `heads/${branch}`,
    sha: createdCommit.sha
  });
}
encryption.addEventListener("click",run);

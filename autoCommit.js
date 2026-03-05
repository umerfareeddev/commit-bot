const fs = require("fs");
const { execSync } = require("child_process");

const options = { stdio: "inherit", shell: "cmd.exe" };

let totalCommits = 100;

for (let i = 1; i <= totalCommits; i++) {
  fs.appendFileSync("data.txt", "commit " + i + "\n");

  execSync("git add .", options);
  execSync(`git commit -m "commit ${i}"`, options);

  console.log("commit " + i + " done");
}

console.log("all commits done");
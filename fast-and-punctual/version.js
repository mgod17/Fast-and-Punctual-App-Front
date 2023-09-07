const fs = require("fs");
const semver = require("semver");

const packageJson = JSON.parse(fs.readFileSync("./package.json"));
const currentVersion = packageJson.version;

const majorArgs = process.argv.includes("--major");
const minorArgs = process.argv.includes("--minor");
const patchArgs = process.argv.includes("--patch");

let newVersion;

if (majorArgs) {
  newVersion = semver.inc(currentVersion, "major");
} else if (minorArgs) {
  newVersion = semver.inc(currentVersion, "minor");
} else if (patchArgs) {
  newVersion = semver.inc(currentVersion, "patch");
} else {
  throw new Error(
    "You need to supply a version argument (--major, --minor or --patch)"
  );
}

packageJson.version = newVersion;
fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

console.log(`Bumped version from ${currentVersion} to ${newVersion}`);
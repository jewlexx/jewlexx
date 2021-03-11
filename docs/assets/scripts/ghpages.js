const path = require("path");
require("gh-pages").publish(
  path.resolve(__dirname, "../", "dist"),
  {
    repo: "https://github.com/jamesinaxx/jamesinaxx.git",
    dotfiles: true,
    message: "Built and published to github pages",
    user: {
      name: "Nerdy Nerd McNerd",
      email: "DAMNTHISBITCHISANERD@NERDALERT.COM",
    },
    silent: false,
  },
  (err) => {
    if (err === undefined) {
      console.log("Successfully published to GitHub Pages");
      process.exit(0);
    }
    console.error(
      "Failed to publish to github pages... More output below for diagnosing the issue"
    );
    console.error(err);
    process.exit(1);
  }
);

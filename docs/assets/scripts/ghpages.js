require("gh-pages").publish(
  "../dist",
  {
    repo: "https://github.com/jamesinaxx/jamesinaxx.git",
    dotfiles: true,
    message: "Built and published to github pages",
    user: {
      name: "Nerdy Nerd McNerd",
      email: "DAMNTHISBITCHISANERD@NERDALERT.COM",
    },
    silent: require("./webpack.config").mode === "production",
  },
  (err) => {
    console.error("Failed to publish to github pages!!!");
    console.error(err);
  }
);

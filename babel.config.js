module.exports = function () {
  const presets = [[
        [
            @babel/preset-env,
            {
                targets: {
                    browsers: [
                        "last 5 versions",
                        "ie >= 8"
                    ]
                }
            }
        ]
    ]];
  
  return {
    presets
  };
}

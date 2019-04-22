// vue.config.js

module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "artifactName": "website-vue.exe",
                "win": {
                    "target": [
                        {
                            "target": "nsis",
                            "arch": [
                                "x64"
                            ]
                        }
                    ]
                }
            }
        }
    }
}
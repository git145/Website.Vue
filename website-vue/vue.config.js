// vue.config.js

module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "artifactName": "richard-kneale-website.exe",
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
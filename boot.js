const RenJSConfig =  {
  'w': 1024,
  'h': 768,
  'guiConfig': 'story/GUI.yaml',
  'storySetup': 'story/Setup.yaml',
  'storyConfig': 'story/Config.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'name': "teen-alien",
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
  "background": "assets/gui/loaderasset1.png"
},
  'fonts': 'assets/gui/fonts.css'
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()

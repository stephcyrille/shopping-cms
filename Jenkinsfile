pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/stephcyrille/shopping-cms'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run buildfront'
        sh 'npm run buildback'
      }
    }  
  }
}
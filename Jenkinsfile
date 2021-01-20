pipeline {
  agent any
        
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/stephcyrille/shopping-cms'
      }
    }
     
    stage('Build React') {
      steps {
        sh 'cd frontend/'
        sh 'npm install'
        sh 'npm run buildfront'
        sh 'npm run buildback'
      }
    }  
  }
}

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
        sh """
              cd frontend/ && npm install && npm run buildfront && npm run buildback
         """
      }
    }  
  }
}

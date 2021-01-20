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
              cd frontend/ && npm install frontend/
              cd frontend/ && npm run buildfront 
              cd frontend/ && npm run buildback
         """
      }
    }  
  }
}

pipeline {
  agent any
        
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/stephcyrille/shopping-cms'
      }
    }
    
    stage('Install React dependencies') {
      steps {
        sh """
              cd frontend/ && npm install
         """
      }
    }
    
    stage('Build React: Public App') {
      steps {
        sh """
              cd frontend/ && npm run buildfront && npm run buildback
         """
      }
    }
    
    stage('Build React: DashBoard App') {
      steps {
        sh """
              cd frontend/ && npm run buildback
         """
      }
    }  
    
  }
}

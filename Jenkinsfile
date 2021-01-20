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
        sh 'cd frontend/ && npm install frontend/'
        sh 'cd frontend/ && npm run buildfront '
        sh 'cd frontend/ && npm run buildback'
      }
    }  
  }
}

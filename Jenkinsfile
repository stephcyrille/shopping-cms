pipeline {
  agent any
        
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/stephcyrille/shopping-cms'
      }
    }
     
    stage('Move to Frontend') {
      steps {
        sh 'cd frontend/'
      }
    } 
    
    stage('Build React') {
      steps {
        sh 'npm install'
        sh 'npm run buildfront'
        sh 'npm run buildback'
      }
    }  
  }
}

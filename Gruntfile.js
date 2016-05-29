/*
  "Discription":"Grunt File quick use",
  "Author":"Mohammad A. Mohaiman",
  "Develop":"Mad Dev BD",
*/


module.exports = function(grunt){
    
  //configure main project settings
    grunt.initConfig({
       
        //Basic setting and info about using plugins
        pkg:grunt.file.readJSON('package.json'),
        
        //Name of plugIn (plugIn name without 'grunt-contrib-')
        cssmin:{
            combine:{
                files:{
                    'html/css/main.css':['html/css/style.css','html/css/other.css']
                }
            }
        },
        
         //uglify (plugIn name without 'grunt-contrib-uglify')
        
            uglify:{
             dist:{
                files:{
                    'html/js/toggle.js.min.js':['html/js/toggle.js']
                }
            }
        },
        
        
    });
    
    //Load the plugIn
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    //Do the Task
    grunt.registerTask('default', ['cssmin','uglify']);
    //after the task
    grunt.log.write('Yo Yo baby!! I am Done!!');    
    
};
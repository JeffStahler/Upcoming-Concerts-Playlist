SongkickAPIkey = 'UokXlLzqCN1zhOWe'
SK_root_api_url = 

location_search = function(query,success_callback){
				
				$.ajax({
					dataType:'jsonp',
					data:{
						query: query,
						apikey: SongkickAPIkey
					},
					url: 'http://api.songkick.com/api/3.0/search/locations.json?&jsoncallback=?',
					error: function(){
					console.log('fail')	
					},
					success: function(data)
					{
					  success_callback(data) 
					}
				})
			}
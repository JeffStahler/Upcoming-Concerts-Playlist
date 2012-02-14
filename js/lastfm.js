var API_key = '546ab0b5d51940ec518d1ff3812980fb';
root_api_url = 'http://ws.audioscrobbler.com/2.0/'

getVenueID = function(venue_name,success_callback){
				
				$.ajax({
					dataType:'jsonp',
					data:{
						venue: venue_name, 
						format: 'json',
						method: 'venue.search',
						api_key: API_key
					},
					url: root_api_url,
					error: function(){
					console.log('fail')	
					},
					success: function(data)
					{
					  success_callback(data) 
					}
				})
			}
getVenueEvents = function(venue_id,success_callback){
				$.ajax({
					dataType:'jsonp',
					data:{
						venue: venue_id, 
						format: 'json',
						method: 'venue.getEvents',
						api_key: API_key
					},
					url: root_api_url,
					error: function(){
					console.log('fail')	
					},
					success: function(data)
					{ 	
					success_callback(data)
					}
				})
			}
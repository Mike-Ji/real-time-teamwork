var Comment = require("../models/Comment");
module.exports = {
	find: function(params, callback){
		Comment.find(params, function(err, comment){
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)
		})
	},
	
	
	findById: function(id, callback){
		Comment.findById(id, function(err, comment){
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)
		})
	},
	
	create: function(params, callback){
		
		var zips = params['zipCodes'];
		var zip = zips.split(',');
		var newZips = [];
		
		zip.forEach(function(zipCode){
			newZips.push(zipCode.trim())
		})
		
		params['zipCodes'] = newZips;
		
		Comment.create(params, function(err, comment){
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)
		})
	},
	
	update: function(id, params, callback){
		Comment.findByIdAndUpdate(id, params, {new: true}, function(err, comment){
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)
		})
	},
	
	
	delete: function(){
		Comment.findByIdAndRemove(id, function(err){
			if (err){
				callback(err, null)
				return
			}
			callback(null, null)
		})
	}
	
}
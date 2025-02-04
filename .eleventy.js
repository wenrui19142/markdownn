module.exports = function (eleventyConfig) {
 
	eleventyConfig.addPassthroughCopy('src/assets');
	 
	eleventyConfig.addPassthroughCopy('src/css');
	 
	eleventyConfig.addWatchTarget('src/css');

	eleventyConfig.addCollection('projects', (collection) => {
 
		return collection.getFilteredByGlob('src/projects/*.md');
		 
		});
		
	 
	return {
	 
	dir: {
	 
	input: 'src',
	 
	output: 'public',
	 
	},
	 
	};
	 
	};
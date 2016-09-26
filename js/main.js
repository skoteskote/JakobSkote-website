$('.video').magnificPopup({ 
  type: 'iframe'
});

$('.photography').magnificPopup({
	items: [
		{src: 'img/photography/1photography.jpg', title: 'Tales of Decaying Cogwheels #1'},
		{src: 'img/photography/2photography.jpg', title: 'Tales of Decaying Cogwheels #2'},
		{src: 'img/photography/3photography.jpg', title: 'Tales of Decaying Cogwheels #3'},
		{src: 'img/photography/4photography.jpg', title: 'Tales of Decaying Cogwheels #4'},
		{src: $('<div style="text-align:center;background:rgba(255,255,255,0.8);padding:50px;"><h2>Tales of Decaying Cogwheels</h2><p>My latest photo series draws inspiration from classical religious baroque paintings, but mixes them up with motifs and themes from todays society, a society where the machine has moved away from the factory floor in to our own minds. With the cogwheel as a symbol instead of the cross I want to question the way we look at effectivity and functionality in our instrumental society, where every action is a means to reach another goal and never itself enough. In contrast to effectivity and instrumentality stands fire and mold, both tangible reminders of the inevitable end of all machines.</p></div>'), type: 'inline'}
	],
	gallery:{enabled:true},
	titleSrc: function(item) {
		return this.item.title;
	},
	type: 'image'
});

$('.setDesign').magnificPopup({
	items: [
		{src: 'img/setdesigns/1setdesigns.jpg', title: 'Exhibition set design and installation for the Medea opening weekend, Malmö 2012.'},
		{src: 'img/setdesigns/2setdesigns.jpg', title: 'Exhibition set design and installation for the Medea opening weekend, Malmö 2012.'},
		{src: 'img/setdesigns/3setdesigns.jpg', title: 'Exhibition set design and installation for the Medea opening weekend, Malmö 2012.'},
		{src: 'img/setdesigns/4setdesigns.jpg', title: 'Exhibition set design and installation for the Medea opening weekend, Malmö 2012.'},
		{src: 'img/setdesigns/5setdesigns.jpg', title: 'Set design for the perfromance All These Holes in Life - Recycled, by teater Insite and teater Barbès, directed by Ragna Weisteen 2012.'},
		{src: 'img/setdesigns/6setdesigns.jpg', title: 'Set design for the perfromance All These Holes in Life - Recycled, by teater Insite and teater Barbès, directed by Ragna Weisteen 2012.'},
		{src: 'img/setdesigns/7setdesigns.jpg', title: 'Set design for the perfromance All These Holes in Life - Recycled, by teater Insite and teater Barbès, directed by Ragna Weisteen 2012.'},
		{src: 'img/setdesigns/8setdesigns.jpg', title: 'Set design for the perfromance All These Holes in Life - Recycled, by teater Insite and teater Barbès, directed by Ragna Weisteen 2012.'},
		{src: 'img/setdesigns/9setdesigns.jpg', title: 'Set design for the perfromance All These Holes in Life - Recycled, by teater Insite and teater Barbès, directed by Ragna Weisteen 2012.'},
	],
	gallery:{enabled:true},
	titleSrc: function(item) {
		return this.item.title;
	},
	type: 'image'
});

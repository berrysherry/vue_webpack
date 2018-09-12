<template>
	<div class="item">
			<div id="instructions" class="paper">
		    	<slot></slot> 
	    	</div>
	</div>
</template>

<script>
	export default {
		props: ['quoteContent','quoteAuthor'],
		data: function() {
			return {
				
			}
		},
		
	}
</script>

<!-- <style>
	.panel-body {
		font-family: 'Arizonia', Tahoma;
		font-size: 24px;
		color: #6e6e6e;
	}
	.quote {
		cursor: pointer;
	}
	.quote:hover {
		background-color: #FFE2E2;
	}
</style> -->

<script>
	function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}
</script>
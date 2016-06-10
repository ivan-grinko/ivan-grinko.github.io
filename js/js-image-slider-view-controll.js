function setSlider(parentId)
{	
	// переместить слайдер новому родителю
	var sliderFrameNode = document.getElementById("sliderFrame");
	var sliderPlaceNode = document.getElementById("sliderPlace-" + parentId);
	sliderPlaceNode.appendChild(sliderFrameNode);
	
	// добавить новые изображения в слайдер
	var sliderImagesNode = document.getElementById("sliderImages-" + parentId);
	var sliderNode = document.getElementById("slider");	
	
	while (sliderImagesNode.firstChild) {
		var node = sliderImagesNode.firstChild;
		if(node.tagName == "IMG"){
			sliderNode.appendChild(node);
		} else {
			sliderImagesNode.removeChild(node);
		}	
	}
	imageSlider.reload();	
}

function clearSliderOnClose(parentId)
{
	// очистить слайдер от текущих изображений
	var sliderNode = document.getElementById("slider");
	var sliderImagesNode = document.getElementById("sliderImages-" + parentId);
	
	while (sliderNode.firstChild) {
		var node = sliderNode.firstChild;
		if(node.tagName == "IMG"){
			sliderImagesNode.appendChild(node);
		} else {
			sliderNode.removeChild(node);
		}	
	}
	
	// вернуть слайдер на базовое место
	var sliderBasePlaceNode = document.getElementById("sliderBasePlace");
	var sliderFrameNode = document.getElementById("sliderFrame");
	sliderBasePlaceNode.appendChild(sliderFrameNode);	
}


function find_min1(hist_array) {
	var min = hist_array[0], index;
	for (var i = 0; i < hist_array.length; i++) {
		if (hist_array[i] < min) {
			min = hist_array[i];
			index = i;
		}
	}
	return [min, index];
}
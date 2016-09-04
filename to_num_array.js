function to_num_array(hist_array) {
	for (var i = 0; i < hist_array.length; i++) {
		hist_array[i] = +hist_array[i];
	}
}
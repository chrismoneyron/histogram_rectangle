function nth_index(hist_array, number, n) {
	var length = hist_array.length;
	var i = -1;
	while (n-- && (i++ < length)) {
		i = hist_array.indexOf(number, i);
		if (i < 0) {
			break;
		}
	}
	return i;
}
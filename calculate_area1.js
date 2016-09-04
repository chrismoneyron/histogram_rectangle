function calculate_area1(index, hist_array, lowest_num, bar_width) {
	var area_right = 0, area_left = 0, total_area = 0, num_above_lowest = 0;

	if (index != (hist_array.length - 1)) {
		for (i = index + 1; i < hist_array.length; i++) {
			if (hist_array[i] >= lowest_num) {
				num_above_lowest += 1;
			}
			else {
				break;
			}
		}
		area_right = bar_width * lowest_num * num_above_lowest;
		num_above_lowest = 0;
	}

	if (index != 0) {
		for (i = index - 1; i >= 0; i--) {
			if (hist_array[i] >= lowest_num) {
				num_above_lowest += 1;
			}
			else {
				break;
			}
		}
		area_left = bar_width * lowest_num * num_above_lowest;
		num_above_lowest = 0;
	}

	total_area = area_left + area_right + (lowest_num * bar_width);

	return total_area;
}
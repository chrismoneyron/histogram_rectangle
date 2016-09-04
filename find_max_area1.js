function find_max_area1(width, bin_count, array) {
	var array_without_lowest = array.slice();

	to_num_array(array);
	to_num_array(array_without_lowest);

	var lowest = array_without_lowest[0];
	var max_area = 0, total_area;
	var index_to_remove, index_lowest;
	var i, j, num_occurences = 1, prev_lowest = -1;

	for (j = 0; j < bin_count; j++) {

		[lowest, index_to_remove] = find_min1(array_without_lowest);
		
		array_without_lowest.splice(index_to_remove, 1);

		if (prev_lowest == lowest) {
			num_occurences += 1;
		}
		else {
			num_occurences = 1;
		}

		index_lowest = nth_index(array, lowest, num_occurences);

		total_area = calculate_area1(index_lowest, array, lowest, width);

		if (total_area > max_area) {
			max_area = total_area;
		}

		prev_lowest = lowest;
		lowest = array_without_lowest[0];
		index_to_remove = 0;
	}

	return max_area;
}
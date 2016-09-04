function find_max_area2(width, bin_count, array) {
	var max_area = 0, curr_area = 0, height_stack = [], index_stack = [];
	var curr_index = 0, i;

	to_num_array(array);

	for (i = 0; i < bin_count; i++) {
		if (height_stack.length == 0 || height_stack[height_stack.length - 1] <= array[i]) {
			height_stack.push(array[i]);
			index_stack.push(curr_index);
			curr_index++;
		}

		else {
			while (height_stack[height_stack.length - 1] > array[i]) {
				curr_area = height_stack.pop() * (curr_index - index_stack.pop()) * width;
				if (curr_area > max_area) {
					max_area = curr_area;
				}
			}
			if (index_stack.length == 0) {
					curr_index = 0;
			}
			i--;
			continue;
		}
	}

	while (height_stack.length != 0) {
		curr_area = height_stack.pop() * (curr_index - index_stack.pop()) * width;
		if (curr_area > max_area) {
			max_area = curr_area;
		}
	}

	return max_area;
}
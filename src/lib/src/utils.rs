pub fn split_string(input: String) -> Vec<String> {
    let str_arr = input.split(" ").map(|x| String::from(x)).collect();
    str_arr
}

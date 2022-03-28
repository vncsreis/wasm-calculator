extern crate console_error_panic_hook;
extern crate wasm_bindgen;

use std::panic;
use wasm_bindgen::prelude::*;

mod calc;
mod utils;

#[wasm_bindgen]
pub fn calculate(input: String) -> f64 {
    panic::set_hook(Box::new(console_error_panic_hook::hook));

    let str_arr = utils::split_string(input);

    calc::operate(&str_arr[1], &str_arr[0], &str_arr[2])
}

#[cfg(test)]
mod calc_unit_tests {
    use super::*;
    use calc;

    #[test]
    fn calc_add_works() {
        assert_eq!(calc::add(1.5, 1.0), 2.5);
        assert_eq!(calc::add(4.0, 2.0), 6.0);
    }

    #[test]
    fn calc_subtract_works() {
        assert_eq!(calc::subtract(5.5, 3.3), 2.2);
        assert_eq!(calc::subtract(4.0, 2.0), 2.0);
        assert_eq!(calc::subtract(4.0, 5.0), -1.0);
    }

    #[test]
    fn calc_multiply_works() {
        assert_eq!(calc::multiply(1.8, 2.9), 5.22);
        assert_eq!(calc::multiply(2.0, 2.0), 4.0);
    }

    #[test]
    fn calc_divide_works() {
        assert_eq!(calc::divide(5.5, 2.5), 2.2);
    }
}

#[cfg(test)]
mod calc_main_tests {
    use super::*;
    use calc;

    #[test]
    fn calc_test() {
        let test_1 = String::from("2.4 + 2.8");
        let test_2 = String::from("4.7 - 2.6");
        let test_3 = String::from("2.7 * 2.9");
        let test_4 = String::from("8.5 / 2.5");

        let test_5 = String::from("2 + 2");
        let test_6 = String::from("4 - 2");
        let test_7 = String::from("2 * 2");
        let test_8 = String::from("8 / 2");
        let test_9 = String::from("-84 + 84");

        assert_eq!(calculate(test_1), (2.4 + 2.8));
        assert_eq!(calculate(test_2), (4.7 - 2.6));
        assert_eq!(calculate(test_3), (2.7 * 2.9));
        assert_eq!(calculate(test_4), (8.5 / 2.5));

        assert_eq!(calculate(test_5), (2.0 + 2.0));
        assert_eq!(calculate(test_6), (4.0 - 2.0));
        assert_eq!(calculate(test_7), (2.0 * 2.0));
        assert_eq!(calculate(test_8), (8.0 / 2.0));
        assert_eq!(calculate(test_9), 0.0);
    }

    #[test]
    fn negative_two_digit_number_sum_with_itself() {
        let test = String::from("-10 + 10");

        assert_eq!(calculate(test), 0.0);
    }
}

#[cfg(test)]
mod utils_tests {
    use super::*;
    use utils::split_string;

    #[test]
    fn split_string_test() {
        let expect_vec = ["2.2", "+", "2.2"].map(|x| String::from(x));

        let split = split_string(String::from("2.2 + 2.2"));

        assert_eq!(split, expect_vec);
        assert_eq!(split[1], String::from("+"));
    }

    #[test]
    fn split_string_with_negative_number() {
        let expect_vec = ["-84", "+", "84"].map(|x| String::from(x));

        let split = split_string(String::from("-84 + 84"));

        assert_eq!(split, expect_vec);
        assert_eq!(split[1], String::from("+"));
    }
}

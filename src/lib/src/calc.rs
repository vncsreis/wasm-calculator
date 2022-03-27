pub fn add(n1: f64, n2: f64) -> f64 {
    n1 + n2
}

pub fn subtract(n1: f64, n2: f64) -> f64 {
    n1 - n2
}

pub fn multiply(n1: f64, n2: f64) -> f64 {
    n1 * n2
}

pub fn divide(n1: f64, n2: f64) -> f64 {
    n1 / n2
}

pub fn operate(operand: &String, n1: &String, n2: &String) -> f64 {
    let n1: f64 = n1.parse().unwrap();
    let n2: f64 = n2.parse().unwrap();

    match operand.as_str() {
        "+" => return add(n1, n2),
        "-" => return subtract(n1, n2),
        "x" => return multiply(n1, n2),
        "/" => return divide(n1, n2),
        _ => todo!(),
    }
}

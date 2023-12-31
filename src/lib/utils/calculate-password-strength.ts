export function calculatePasswordStrength(password: string) {
	const strength = {
		value: 0,
		isLengthSufficient: false,
		hasUppercase: false,
		hasLowercase: false,
		hasDigit: false,
		hasSpecialCharacter: false,
	};

	if (password.length >= 8) {
		strength.value += 1;
		strength.isLengthSufficient = true;
	}

	if (/[A-Z]/.test(password)) {
		strength.value += 1;
		strength.hasUppercase = true;
	}

	if (/[a-z]/.test(password)) {
		strength.value += 1;
		strength.hasLowercase = true;
	}

	if (/\d/.test(password)) {
		strength.value += 1;
		strength.hasDigit = true;
	}

	if (/[!£@#$%^&*()\-=_+[\]{}|:;"<>,.?/~`]/.test(password)) {
		strength.value += 1;
		strength.hasSpecialCharacter = true;
	}

	strength.value = Math.min(strength.value, 5);

	return strength;
}

const switchButton = document.querySelectorAll('.switch_button')
const contentSwitch = document.querySelectorAll('.content_switch')
const recordBtn = document.querySelector('.button-time-btn')
if (switchButton) {
	switchButton.forEach(button => {
		button.addEventListener('click', e => {
			switchButton.forEach(btnRemove => {
				btnRemove.classList.remove('active-switch')
				recordBtn.style.display = 'block'
			})

			button.classList.add('active-switch')

			let pickedButton = button.getAttribute('data-switch')

			contentSwitch.forEach(content => {
				let pickedContent = content.getAttribute('data-switch')

				if (pickedContent === pickedButton) {
					content.classList.add('content-switch-visible')
				} else {
					content.classList.remove('content-switch-visible')
				}
			})
		})
	})
}
if (recordBtn) {
	recordBtn.addEventListener('click', () => {
		recordBtn.style.display = 'none'
	})
}

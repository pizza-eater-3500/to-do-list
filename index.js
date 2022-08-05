const noteInput = document.querySelector("#note-input")
const addButton = document.querySelector("#add-btn")
const notesHolder = document.querySelector(".notes-holder")
const changeModeButton = document.querySelector("#change-mode-btn")

changeModeButton.addEventListener("click", () => document.body.classList.toggle("dark-mode"))
changeModeButton.addEventListener("touchstart", () => span.remove())

const addButtons = (span, note) => {
    const checkIfInputExist = () => {
        if (span.querySelector("input") === null) {
            handleEdit(span, note)
        }
    }
    const removeButton = document.createElement("button")
    removeButton.id = "remove-btn"
    removeButton.textContent = "Remove"
    removeButton.addEventListener("click", () => span.remove())
    removeButton.addEventListener("touchstart", () => span.remove())

    const editButton = document.createElement("button")
    editButton.id = "edit-btn"
    editButton.textContent = "Edit"
    editButton.addEventListener("click", checkIfInputExist)
    editButton.addEventListener("touchstart", checkIfInputExist)

    span.appendChild(removeButton)
    span.appendChild(editButton)
}

const handleEdit = (span, note) => {
    const confirmEdit = (newNote) => {
        span.textContent = `* ${newNote}`
        editInput.remove()
        confirmButton.remove()
        addButtons(span, newNote)
    }
    const editInput = document.createElement("input")
    editInput.type = "text"
    editInput.id = "edit-input"
    editInput.value = note
    editInput.addEventListener("keyup", (event) => {if (event.key === "Enter"){confirmEdit(editInput.value)}})

    const confirmButton = document.createElement("button")
    confirmButton.id = "confirm-btn"
    confirmButton.textContent = "Confirm"
    confirmButton.addEventListener("click", () => confirmEdit(editInput.value))
    confirmButton.addEventListener("touchstart", () => confirmEdit(editInput.value))

    span.appendChild(editInput)
    span.appendChild(confirmButton)
}

const handleInput = (event) => {
    const handleNoteAdding = () => {
        const note = noteInput.value
        noteInput.value = ""

        const span = document.createElement("span")
        span.textContent =`* ${note}`

        addButtons(span, note)

        notesHolder.appendChild(span)
    }
    if (event.key === "Enter") {
        handleNoteAdding()
    } else if (event.type === "click") {
        handleNoteAdding()
    }
}

noteInput.addEventListener("keyup", handleInput)
addButton.addEventListener("click", handleInput)
addButton.addEventListener("touchstart", handleInput)
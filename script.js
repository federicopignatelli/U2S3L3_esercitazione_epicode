

fetch('https://striveschool-api.herokuapp.com/books',)
    .then((response) => {
        console.log(response)
        if (response.ok) {
            return response.json()
        }
    })
    .then((data) => {
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            //creo la colonna e la attacco alla row
            const col = document.createElement('div')
            col.classList.add("col", "col-sm-1", "col-md-4", "col-lg-3")
            const row = document.getElementById('row')
            row.appendChild(col)

            //creo la card e la appendo alla colonna
            const card = document.createElement('div')
            card.classList.add("card")
            card.classList.add("mb-4")
            col.appendChild(card)

            //creo l'immagine che verrà messa nella card
            const imageCard = new Image
            imageCard.src = data[1].img
            imageCard.classList.add("card-img-top")
            card.appendChild(imageCard)

            //creo il cardbody che andra appeso alla div card
            const cardBody = document.createElement('div')
            cardBody.classList.add("card-body")

            const bookTitle = document.createElement('h5')
            bookTitle.classList.add("card-title")
            bookTitle.innerText = data[0].title

            const bookPrice = document.createElement('p')
            bookPrice.classList.add("card-text")
            bookPrice.innerText = `eur ${data[0].price}`

            card.appendChild(cardBody)
            cardBody.appendChild(bookTitle)
            cardBody.appendChild(bookPrice)

        }

    })

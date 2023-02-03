# Challenge Greydive App

Realizar una app en React.js que lea el siguiente archivo JSON y genere con cada ítem una interfaz de app de encuesta (como Google Forms).
En cuanto a diseño y estética tiene que diferir de Google Forms. Podés utilizar cualquier librería que creas necesaria.
Las respuestas de la encuesta deben ser enviadas a una base de datos de Firebase.
Dicha base de datos tiene que ser de su propiedad. No nos compartas acceso a la base de datos.
Por último, traé las respuestas de la base de datos ya mencionada y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tiene que aparecer un mensaje y el acceso a esa ruta en donde estarán las respuestas. El diseño y estética queda a libre elección.

archivo JSON:
{
	"items": [
		{
			"type": "text",
			"label": "Nombre completo",
			"name": "full_name",
			"required": true
		},
		{
			"type": "email",
			"label": "Correo electrónico",
			"name": "email",
			"required": true
		},
		{
			"type": "date",
			"label": "Fecha de nacimiento",
			"name": "birth_date",
			"required": true
		},
		{
			"type": "select",
			"label": "¿Cuál es tu país de origen?",
			"name": "country_of_origin",
			"options": [
				{
					"label": "Argentina",
					"value": "argentina"
				},
				{
					"label": "Brasil",
					"value": "brasil"
				},
				{
					"label": "Chile",
					"value": "chile"
				},
				{
					"label": "Colombia",
					"value": "colombia"
				},
				{
					"label": "México",
					"value": "mexico"
				},
				{
					"label": "Perú",
					"value": "peru"
				},
				{
					"label": "Uruguay",
					"value": "uruguay"
				},
				{
					"label": "Venezuela",
					"value": "venezuela"
				}
			],
			"required": true
		},
		{
			"type": "checkbox",
			"label": "¿Acepta los términos y condiciones?",
			"name": "terms_and_conditions",
			"required": true
		},
		{
			"type": "submit",
			"label": "Enviar"
		}
	]
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Librerias:

Para estilos generales se uso: [styled-components](https://styled-components.com/docs)

Para el formulario controlado se uso: [formik](https://formik.org/docs/overview) y [yup](https://www.npmjs.com/package/yup)

Para el ruteo se uso: [react-router-dom](https://reactrouter.com/en/main)

Para la conexión con firebase se uso: [firebase](https://firebase.google.com/docs)

Para las alertas se uso: [sweetalert2](https://sweetalert2.github.io/)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para el archivo .env agregar las siguentes variables con los valores de las credenciales de firebase:

REACT_APP_API_KEY=

REACT_APP_AUTH_DOMAIN=

REACT_APP_PROJECT_ID=

REACT_APP_STORAGE_BUCKET=

REACT_APP_MESSAGING_SENDER_ID=

REACT_APP_APP_ID=



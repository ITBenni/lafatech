# Landesfachschaft Technikdidaktik der Pädagogischen Hochschulen in Baden-Württemberg

This is the repository for the LFTs website.
It is entirely static so it can be run from any webspace without any dependencies.

## Getting started

### Prerequisites

Install Hugo locally by following [their instructions](https://gohugo.io/getting-started/installing/).

### Project structure

Check out [Hugos docs](https://gohugo.io/content-management/) for the overall project structure. Here are the most important things to know when new content:

- The website basically consists of two pages, each containing multiple sections.
- Each page is built by creating a markdown file in the content directory. Their only content is a call to the [singlepage.html](layouts/shortcodes/singlepage.html) shortcode. It renders any markdown files in a given directory, sorted by weight defined in their frontmatter.
- To create a new section simply add a new markdown file in the corresponding directory, add the frontmatter, and add content.
- Each section is added to the main navigation of the page if set to `visible` in the frontmatter. The navigation is created by the [nav](layouts/partials/nav) partial.

### Developing

Start the Hugo dev server by running

~~~ bash
hugo_dev.sh
~~~

The server will listen on `localhost:1313` by default.
The script disables as many caching functionalities as possible, but sometimes it is still required to restart the server manually to see changes.  

### Building

Build the project for production by running

~~~ bash
hugo_prod.sh
~~~

## Deployment

When running `hugo_prod.sh` Hugo will generate a `public` directory.
Copy the content of this directory to your webspace and you are good to go.


## Built With

- [Hugo](https://gohugo.io/) - Static site generator


## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details


## Acknowledgments

Thanks to Johannes Theodoridis for his help with Hugo ;)

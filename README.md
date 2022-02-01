# IMDB-API-UI

## Features of the app / original requirements

* ✔ __Consume API of the Open Movie Database (http://www.omdbapi.com/). API key: ....__
* ✔ __Via an adequate input, the user can search by movie title__ \
(this was kept minimal concerning the time frame).
* ✔ __Group the movies by year. The grouping logic should be executed in a Web Worker.__
* ✔ __Show the results in a cool UI, taking into account the grouping. The items should contain a link to the movie’s IMDB page__. \
Here The UI was kept rather minimal,
 but still clean looking. Also, it has some responsiveness (the three columns in the middle become one on smaller screens). The image of the film with it's title are the link
 themselves.
 * ✔ __The usage of a JS framework of your choice is mandatory. We recommend to use Angular, but feel free to use the framework you are most comfortable with.__ \
  I chose Angular.
* ✔ __The proper use of Typescript is desirable.__ \
I used an interface, a class, and enum and a type, which I found
sufficient to implement the features. See them under: \
`tpyes/result.ts`
* ✔ __Use git for version control and share the repo folder (in a file or GitHub repository).__

## Optional requirements

* Optional: Multiple inputs for different search parameters
* Optional: Show in a separate page the details of a single movie.

I would need extra time to implement these features.

## Other

I used Tailwind for css and I apply the Tailwind classes
directly to the elements, as there were no too many
repeating patterns, and the number of added classes are
usually 1-2 (and at most 4).

There are further comments about the implementation in the code.

I used the title __Harry Potter__ as I was testing the
application manually because it has two results for the
year 2010. I didn't find a film or title which has more than
2 results (I didn't merge multiple pages because of time).


/**
 * This injects Tailwind's base styles, which is a combination of
 * Normalize.css and some additional base styles.
 *
 * You can see the styles here:
 * https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css
 *
 * If using `postcss-import`, use this import instead:
 *
 * @import "tailwindcss/preflight";
 */
@tailwind preflight;

/**
  * This injects any component classes registered by plugins.
  *
  * If using `postcss-import`, use this import instead:
  *
  * @import "tailwindcss/components";
  */
@tailwind components;

/**
  * Here you would add any of your custom component classes; stuff that you'd
  * want loaded *before* the utilities so that the utilities could still
  * override them.
  *
  * Example:
  *
  * .btn { ... }
  * .form-input { ... }
  *
  * Or if using a preprocessor or `postcss-import`:
  *
  * @import "components/buttons";
  * @import "components/forms";
  */

/**
  * This injects all of Tailwind's utility classes, generated based on your
  * config file.
  *
  * If using `postcss-import`, use this import instead:
  *
  * @import "tailwindcss/utilities";
  */
 @tailwind utilities;
 
 /**
  * Here you would add any custom utilities you need that don't come out of the
  * box with Tailwind.
  *
  * Example :
  *
  * .bg-pattern-graph-paper { ... }
  * .skew-45 { ... }
  *
  * Or if using a preprocessor or `postcss-import`:
  *
  * @import "utilities/background-patterns";
  * @import "utilities/skew-transforms";
  */

```javascript
//Ensure your Tailwind CSS is correctly configured and that the `background-image` property is enabled.
//Check your browser's CSS support for gradients. Some older browsers may have limited support.
//Consider adding vendor prefixes as a fallback for older browsers.

<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <!-- Content here -->
</div>

/*Alternative using linear-gradient*/
<div style="background-image: linear-gradient(to right, blue, purple); padding: 1rem; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <!-- Content here -->
</div>
```
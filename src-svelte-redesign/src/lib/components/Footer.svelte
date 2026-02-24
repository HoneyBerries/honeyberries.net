<script lang="ts">
  import { SITE_INFO } from '$lib/constants';
</script>

<footer class="border-t border-gray-200/60 mt-auto">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
    <p class="text-sm text-gray-500">
      &copy; {SITE_INFO.currentYear} {SITE_INFO.author}. All rights reserved.
    </p>
    <div class="mt-2 flex justify-center gap-4 text-xs text-gray-400">
      <a href="/projects/modcord/privacy-policy" class="hover:text-gray-600 transition-colors">Privacy Policy</a>
      <a href="/projects/modcord/terms-of-service" class="hover:text-gray-600 transition-colors">Terms of Service</a>
    </div>
  </div>
</footer>

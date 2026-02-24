<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Privacy Policy | ModCord" description="ModCord privacy policy." pathname="/projects/modcord/privacy-policy" />

<section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h1 class="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
  <div class="prose prose-gray max-w-none text-gray-600 space-y-4">
    <p>
      ModCord respects your privacy. We do not collect personal data beyond what Discord provides
      through its API for the purpose of moderation. No messages or user data are stored permanently.
    </p>
    <p>
      ModCord processes messages in real time to detect rule violations. Message content is analyzed
      by AI models and discarded immediately after processing. We do not sell, share, or retain any
      user data.
    </p>
    <p>
      If you have questions about this policy, feel free to reach out via our Discord server or
      GitHub repository.
    </p>
  </div>
  <a
    href="/projects/modcord"
    class="inline-flex items-center gap-1 mt-8 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
  >
    ← Back to ModCord
  </a>
</section>

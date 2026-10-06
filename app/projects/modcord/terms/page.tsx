import { A, LegalPage, LI, P, UL, type LegalSectionData } from "@/components/legal/legal-page"
import { LEGAL_UPDATED, LEGAL_UPDATED_ISO } from "@/lib/data/modcord"
import { MODCORD_CONTACT_EMAIL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/modcord/terms",
  title: "Modcord Terms of Service",
  description:
    "The terms for using the hosted Modcord Discord bot, including what the AI can get wrong and who is responsible.",
})

const sections: LegalSectionData[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <>
        <P>
          These terms are between you and Henry Ng, who runs the hosted Modcord
          bot (&ldquo;I&rdquo; and &ldquo;me&rdquo;). By adding Modcord to a
          server or using it, you agree to them. If you add it to a server, you
          confirm that you have the permission to do so (Manage Server) and the
          authority to agree for that server.
        </P>
        <P>
          These terms cover the hosted bot only. If you run your own copy, they
          do not apply to it.
        </P>
      </>
    ),
  },
  {
    id: "what",
    title: "What Modcord does",
    body: (
      <P>
        Modcord reads messages in channels where you turn it on and uses an AI
        model to decide whether they break your server&apos;s rules. Depending
        on the actions your server allows, it can warn, delete messages, time
        out, kick or ban members, and it records what it did. How it handles
        data is described in the{" "}
        <A href="/projects/modcord/privacy">Privacy Policy</A>.
      </P>
    ),
  },
  {
    id: "ai-errors",
    title: "The AI can be wrong",
    body: (
      <>
        <P>
          Modcord&apos;s decisions are made by an AI model. It can miss
          violations, act on harmless messages, and misread context, sarcasm or
          a language it handles poorly. It is a tool to help moderators, not a
          replacement for them.
        </P>
        <P>
          Server admins are responsible for what happens in their servers: for
          the rules they set, the actions they enable, and for reviewing
          actions and appeals. You can turn off any action you do not want with{" "}
          <code>/preferences</code>.
        </P>
      </>
    ),
  },
  {
    id: "admins",
    title: "What server admins agree to",
    body: (
      <UL>
        <LI>
          Follow Discord&apos;s{" "}
          <A href="https://discord.com/terms">Terms of Service</A> and{" "}
          <A href="https://discord.com/developers/docs/policies-and-agreements/developer-policy">
            Developer Policy
          </A>
          , and the law.
        </LI>
        <LI>
          Tell your members that an AI provider processes their messages for
          moderation, as the Privacy Policy describes.
        </LI>
        <LI>
          Do not use Modcord to harass, discriminate against or target people,
          or to break the rules of any platform.
        </LI>
      </UL>
    ),
  },
  {
    id: "use",
    title: "Acceptable use",
    body: (
      <UL>
        <LI>Do not try to disrupt the service or overload it.</LI>
        <LI>
          Do not try to get at another server&apos;s data or at anything you
          are not allowed to access.
        </LI>
        <LI>Do not use appeals to harass moderators or other members.</LI>
      </UL>
    ),
  },
  {
    id: "service",
    title: "The service as offered",
    body: (
      <>
        <P>
          Modcord is free and run by one person. There is no promise that it
          will be available, fast or error-free. I may change it, pause it or
          stop it at any time.
        </P>
        <P>
          I may remove the bot from a server or block its use if it is abused,
          if Discord or the law requires it, or to protect the service. You can
          remove it from your server at any time, which deletes the server&apos;s
          data as the Privacy Policy describes.
        </P>
      </>
    ),
  },
  {
    id: "warranty",
    title: "No warranty",
    body: (
      <P>
        Modcord is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
        To the extent the law allows, I make no warranties of any kind,
        including that moderation decisions will be accurate, complete or
        timely, or that the service will be uninterrupted.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Limit of liability",
    body: (
      <>
        <P>
          To the extent the law allows, I am not liable for indirect,
          incidental or consequential damages, for lost data or lost profits, or
          for harm that results from Modcord acting on a message or failing to
          act on one. Some places do not allow these limits, in which case they
          apply only as far as the law permits.
        </P>
      </>
    ),
  },
  {
    id: "open-source",
    title: "Open source",
    body: (
      <P>
        Modcord&apos;s code is licensed under the GPL-3.0 and available on{" "}
        <A href={MODCORD_REPO_URL}>GitHub</A>. That license governs what you can
        do with the code. These terms govern use of the hosted service. Modcord
        is not affiliated with Discord Inc. or any AI provider.
      </P>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <P>
        These terms are governed by the laws of California, USA. Disputes will
        be brought in the state or federal courts located in California.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <P>
        If I change these terms I will update the date at the top and add a line
        to the change history below. Using Modcord after a change means you
        accept it. If you do not accept it, remove the bot.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <P>
        Questions:{" "}
        <A href={`mailto:${MODCORD_CONTACT_EMAIL}`}>{MODCORD_CONTACT_EMAIL}</A>.
      </P>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Modcord Terms of Service"
      updated={LEGAL_UPDATED}
      updatedIso={LEGAL_UPDATED_ISO}
      summary={
        <>
          <p>Modcord is free, run by one person, and has no uptime promise.</p>
          <p>
            Its AI can be wrong. Server admins are responsible for their rules
            and for reviewing actions and appeals.
          </p>
          <p>
            I am not liable for harm from Modcord acting or failing to act.
            These terms are governed by California law.
          </p>
        </>
      }
      sections={sections}
      changes={[
        {
          date: LEGAL_UPDATED,
          note: "First version of these terms for the hosted bot.",
        },
      ]}
    />
  )
}

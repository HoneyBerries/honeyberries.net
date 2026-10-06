import { A, LegalPage, LI, P, UL, type LegalSectionData } from "@/components/legal/legal-page"
import { RetentionTable } from "@/components/modcord/retention-table"
import { LEGAL_UPDATED, LEGAL_UPDATED_ISO } from "@/lib/data/modcord"
import { MODCORD_CONTACT_EMAIL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/modcord/privacy",
  title: "Modcord Privacy Policy",
  description:
    "What the hosted Modcord Discord bot stores, who else handles your data, and how to ask for it to be deleted.",
})

const sections: LegalSectionData[] = [
  {
    id: "who",
    title: "Who runs Modcord",
    body: (
      <>
        <P>
          Modcord is a Discord moderation bot run by Henry Ng, an individual
          (&ldquo;I&rdquo; and &ldquo;me&rdquo; below). This policy covers the
          hosted bot: the one you add to your server from the invite link on
          this site.
        </P>
        <P>
          If you run your own copy from the{" "}
          <A href={MODCORD_REPO_URL}>open-source code</A>, you are the operator
          of that copy and this policy does not apply to it. I do not receive
          data from self-hosted copies.
        </P>
      </>
    ),
  },
  {
    id: "store",
    title: "What I store",
    body: (
      <>
        <P>
          Modcord does not store the text of messages. It stores the following,
          and a daily job deletes it when the time below is up.
        </P>
        <RetentionTable />
        <P>
          When Modcord deletes a message, the record keeps only the
          message&apos;s Discord ID, not what it said. The reason for an action
          is written by the AI and can describe or quote part of the message
          that caused it, so it is kept with the action for the same time.
        </P>
      </>
    ),
  },
  {
    id: "passes-through",
    title: "What passes through without being stored",
    body: (
      <>
        <P>
          Modcord has Discord&apos;s message content access so it can moderate.
          While AI moderation is on in a channel, it reads new messages there
          and the recent history of the channel (up to 50 messages from the
          last 24 hours by default) for context.
        </P>
        <P>For each check, Modcord sends this to the AI provider:</P>
        <UL>
          <LI>message text, images and GIFs</LI>
          <LI>usernames, user IDs and roles</LI>
          <LI>your server&apos;s rules and the channel guidelines</LI>
          <LI>
            the member&apos;s recent moderation actions from the last 30 days
          </LI>
        </UL>
        <P>
          Modcord keeps this in memory while the check runs and does not save
          it.
        </P>
      </>
    ),
  },
  {
    id: "others",
    title: "Who else handles data",
    body: (
      <>
        <UL>
          <LI>
            <strong>AI provider.</strong> W&amp;B Inference, operated by
            CoreWeave, receives what section 3 lists and returns a decision.
            Their policy is{" "}
            <A href="https://docs.coreweave.com/policies/terms-of-service/privacy-policy">
              here
            </A>
            . I do not control what they do with that content, and the
            documents I could find do not say whether they keep prompts or use
            them for training. Please do not assume they do not.
          </LI>
          <LI>
            <strong>Database hosting.</strong> Microsoft Azure (Azure Database
            for PostgreSQL) hosts the database that holds what section 2
            lists. See the{" "}
            <A href="https://privacy.microsoft.com/privacystatement">
              Microsoft privacy statement
            </A>
            .
          </LI>
          <LI>
            <strong>Discord.</strong> Modcord runs on Discord, which handles
            your messages and account under its own{" "}
            <A href="https://discord.com/privacy">Privacy Policy</A>.
          </LI>
        </UL>
        <P>
          I do not sell your data, show advertising, or run analytics on it. I
          would disclose data if the law required it.
        </P>
        <P>
          If sending messages to an AI provider is not acceptable for your
          server, turn AI moderation off with <code>/preferences</code> or
          remove the bot.
        </P>
      </>
    ),
  },
  {
    id: "choices",
    title: "Your choices",
    body: (
      <>
        <UL>
          <LI>
            <strong>Server admins</strong> can change or reset settings with{" "}
            <code>/preferences</code>. Removing Modcord from your server
            deletes the server&apos;s settings, rules, guidelines, exclusions,
            actions and appeals. Copies in backups last up to 7 days.
          </LI>
          <LI>
            <strong>Anyone</strong> can email me at{" "}
            <A href={`mailto:${MODCORD_CONTACT_EMAIL}`}>
              {MODCORD_CONTACT_EMAIL}
            </A>{" "}
            to ask what is stored about their Discord user ID, or to ask for it
            to be deleted. I will answer within 30 days. I may need you to show
            you control the account, and I will tell you if something has to be
            kept and why.
          </LI>
          <LI>
            <strong>Appeals.</strong> Where a server allows it, you can appeal
            an action with <code>/appeal</code>.
          </LI>
        </UL>
        <P>
          California residents: I do not sell or share personal information.
          You can use the same email address to ask about your data.
        </P>
      </>
    ),
  },
  {
    id: "support-access",
    title: "Developer support access",
    body: (
      <>
        <P>
          A small number of developer accounts can act as an admin in any
          server the bot is in, so that I can help when something goes wrong.
          Actions taken through <code>/mod</code> by those accounts appear as
          Modcord&apos;s.
        </P>
        <P>
          I look at a server&apos;s data only when a server admin asks me for
          help, and I do not copy it or use it for anything else. Otherwise I
          leave servers alone.
        </P>
      </>
    ),
  },
  {
    id: "security",
    title: "Security, logs and backups",
    body: (
      <P>
        I use reasonable measures to protect the database and credentials, but
        no system is perfectly secure and I cannot promise it will never be
        breached. Operational logs never contain message content, but they can
        contain server names and user or server IDs; I do not promise a
        particular retention period for logs. Database backups last up to 7
        days.
      </P>
    ),
  },
  {
    id: "age",
    title: "Age",
    body: (
      <P>
        Modcord runs on Discord, which requires users to be at least 13 (or
        older where local law says so). I do not knowingly collect data from
        anyone under 13. If you think I have, email me and I will delete it.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <P>
        If I change this policy I will update the date at the top and add a
        line to the change history below. If a change is significant I will also
        say so on the Modcord page.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <P>
        Questions or requests:{" "}
        <A href={`mailto:${MODCORD_CONTACT_EMAIL}`}>{MODCORD_CONTACT_EMAIL}</A>.
      </P>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Modcord Privacy Policy"
      updated={LEGAL_UPDATED}
      updatedIso={LEGAL_UPDATED_ISO}
      summary={
        <>
          <p>Modcord reads messages to moderate them but does not store them.</p>
          <p>
            It stores a record of each moderation action for 1 year, and
            appeal text for 90 days after an appeal is resolved.
          </p>
          <p>
            Message text and images are sent to an AI provider for each check.
          </p>
          <p>
            Removing the bot deletes your server&apos;s data. You can also email
            a deletion request.
          </p>
        </>
      }
      sections={sections}
      changes={[
        {
          date: LEGAL_UPDATED,
          note: "First version of this policy for the hosted bot.",
        },
      ]}
    />
  )
}

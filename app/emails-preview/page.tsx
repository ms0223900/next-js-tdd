import React from 'react';
import NotionMagicLinkEmail from '../react-email-starter/emails/notion-magic-link';
import StripeWelcomeEmail from '../react-email-starter/emails/stripe-welcome';
import PlaidVerifyIdentityEmail from '../react-email-starter/emails/plaid-verify-identity';
import VercelInviteUserEmail from '../react-email-starter/emails/vercel-invite-user';
import SummerDealsEmail from '../react-email-starter/emails/summer-deals';

const EmailPreviewPage = () => {
    const emails = [
        {
            name: 'Notion Magic Link',
            component: <NotionMagicLinkEmail {...NotionMagicLinkEmail.PreviewProps} />,
            description: 'Magic link login email for Notion'
        },
        {
            name: 'Stripe Welcome',
            component: <StripeWelcomeEmail />,
            description: 'Welcome email for new Stripe users'
        },
        {
            name: 'Plaid Verify Identity',
            component: <PlaidVerifyIdentityEmail {...PlaidVerifyIdentityEmail.PreviewProps} />,
            description: 'Identity verification email for Plaid'
        },
        {
            name: 'Vercel Invite User',
            component: <VercelInviteUserEmail {...VercelInviteUserEmail.PreviewProps} />,
            description: 'Team invitation email for Vercel'
        },
        {
            name: 'Summer Deals',
            component: <SummerDealsEmail {...SummerDealsEmail.PreviewProps} />,
            description: 'Summer promotional email with deals and discounts'
        }
    ];

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1 style={titleStyle}>📧 Email Templates Preview</h1>
                <p style={subtitleStyle}>所有可用的電子郵件模板預覽 / Preview of all available email templates</p>
            </header>

            <div style={emailGridStyle}>
                {emails.map((email, index) => (
                    <div key={index} style={emailCardStyle}>
                        <h2 style={emailTitleStyle}>{email.name}</h2>
                        <p style={emailDescriptionStyle}>{email.description}</p>
                        <div style={emailPreviewStyle}>
                            {email.component}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '40px',
    borderBottom: '2px solid #eee',
    paddingBottom: '20px'
};

const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 10px 0'
};

const subtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0'
};

const emailGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
    padding: '20px 0'
};

const emailCardStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
};

const emailTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 8px 0'
};

const emailDescriptionStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
    margin: '0 0 20px 0'
};

const emailPreviewStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    overflow: 'auto',
    maxHeight: '600px'
};

export default EmailPreviewPage; 
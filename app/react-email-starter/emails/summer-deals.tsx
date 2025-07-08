import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface SummerDealsEmailProps {
    customerName?: string;
    discountCode?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const SummerDealsEmail = ({
    customerName = "Valued Customer",
    discountCode = "SUMMER20"
}: SummerDealsEmailProps) => {
    const previewText = `Summer Deals - 20% Off Your First Order!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white font-sans">
                    <Container className="mx-auto my-0 max-w-[600px]">
                        {/* Yellow Header Section */}
                        <Section className="bg-yellow-400 px-8 py-12 text-center">
                            <Heading className="mx-0 my-0 p-0 text-white font-bold text-[48px] leading-[1.2] tracking-[0.2em]">
                                SUMMER
                            </Heading>
                            <Heading className="mx-0 my-0 p-0 text-white font-bold text-[48px] leading-[1.2] tracking-[0.2em]">
                                DEALS
                            </Heading>
                            <Text className="text-right text-[14px] text-white/80 font-medium tracking-[0.3em] mt-2 mr-8">
                                D<br />E<br />A<br />L<br />S
                            </Text>
                        </Section>

                        {/* Watermelon Image Section */}
                        <Section className="bg-gradient-to-b from-yellow-400 via-yellow-300 to-cyan-400 px-8 py-16 text-center relative">
                            {/* Decorative waves */}
                            <div className="absolute top-0 left-0 w-full h-16 bg-yellow-400">
                                <svg viewBox="0 0 1200 120" className="w-full h-full fill-current text-cyan-400">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                                </svg>
                            </div>

                            {/* Watermelon placeholder */}
                            <div className="relative z-10 mt-8">
                                <Img
                                    src="https://via.placeholder.com/300x200/ff6b6b/ffffff?text=🍉+Watermelon"
                                    width="300"
                                    height="200"
                                    alt="Fresh Summer Watermelon"
                                    className="mx-auto rounded-lg shadow-lg"
                                />
                                {/* Splash effects placeholder */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-400 rounded-full opacity-60"></div>
                                <div className="absolute -top-2 -right-6 w-6 h-6 bg-red-300 rounded-full opacity-40"></div>
                                <div className="absolute -bottom-2 -left-8 w-10 h-10 bg-red-500 rounded-full opacity-50"></div>
                                <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-red-400 rounded-full opacity-60"></div>
                            </div>
                        </Section>

                        {/* Blue Promotional Section */}
                        <Section className="bg-cyan-400 px-8 py-16 text-center">
                            <Text className="text-gray-700 text-[18px] leading-[28px] mb-6 max-w-[400px] mx-auto">
                                We have launched summer deals for existing customers. Now you can enjoy and order deals while staying at home and you will have <strong>20% discount</strong> on your first order.
                            </Text>

                            <Button
                                className="bg-transparent border-2 border-gray-600 text-gray-700 font-semibold text-[16px] px-12 py-4 rounded-none transition-colors"
                                href="#deals"
                            >
                                CHECKOUT THE DEALS
                            </Button>
                        </Section>

                        {/* Bottom Section */}
                        <Section className="bg-cyan-400 px-8 pb-12">
                            <div className="bg-yellow-400 rounded-full w-24 h-24 absolute right-8 -bottom-12"></div>
                            <Text className="text-gray-600 text-[14px] leading-[22px] max-w-[500px] mx-auto text-center">
                                June 20 is the first official day of summer or what I think I can fairly call super summer. No, it's probably not going to be known as that in history books, but when you're in the middle of it, you can call it whatever you want.
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-gray-100 px-8 py-6 text-center">
                            <Text className="text-gray-500 text-[12px] leading-[16px]">
                                Use code <strong>{discountCode}</strong> at checkout • Valid until end of summer
                            </Text>
                            <Text className="text-gray-400 text-[10px] leading-[14px] mt-2">
                                You received this email because you're a valued customer.
                                <br />
                                Unsubscribe at any time.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

SummerDealsEmail.PreviewProps = {
    customerName: 'Sarah Chen',
    discountCode: 'SUMMER20',
} as SummerDealsEmailProps;

export default SummerDealsEmail; 
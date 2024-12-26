import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="footer footer-center bg-base-200/50 px-6 py-4">
            <aside>
                <p>{t('footer.text')}</p>
            </aside>
        </footer>
    )
}
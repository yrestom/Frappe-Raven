import { AlertContent } from "@/components/feature/settings/common/DeleteAlert"
import { RavenSchedulerEvent } from "@/types/RavenIntegrations/RavenSchedulerEvent"
import { DateMonthYear } from "@/utils/dateConversions"
import { DIALOG_CONTENT_CLASS } from "@/utils/layout/dialog"
import { Flex, Badge, IconButton, AlertDialog, Text } from "@radix-ui/themes"
import { useState } from "react"
import { BiEdit, BiTrash } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

export const List = ({ data }: { data: RavenSchedulerEvent[] }) => {

    return (
        <Flex direction='column' gap='4' width='100%'>
            {data?.map((item, index) => (
                <ScheduledMessageItem item={item} key={index} />
            ))}
        </Flex>
    )
}


const ScheduledMessageItem = ({ item }: { item: RavenSchedulerEvent }) => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }

    return (
        <Flex direction='column' gap='2' width='100%' justify={'between'} className="border border-gray-4 dark:border-gray-6 rounded-radius2 p-3">
            <Flex direction='row' align='center' justify='between'>
                <Flex direction='column' gap='1'>
                    <Flex direction={'row'} gap={'2'}>
                        <Text size={'2'} weight={'bold'}>{item.name}</Text>
                        <Badge color={item.disabled ? 'gray' : 'green'}>{item.disabled ? 'Disabled' : 'Enabled'}</Badge>
                    </Flex>
                    <Text size='1' style={{
                        fontStyle: 'italic',
                        color: 'gray'
                    }}>Created by {item.owner} on <DateMonthYear date={item.creation} /></Text>
                </Flex>
                <Flex direction={'row'} gap={'2'} align={'center'}>
                    <IconButton
                        variant="ghost"
                        color="gray"
                        aria-label="Click to edit webhook"
                        title='Edit webhook'
                        onClick={() => navigate(`./${item.name}`)}
                        style={{
                            // @ts-ignore
                            '--icon-button-ghost-padding': '0',
                            height: 'var(--base-button-height)',
                            width: 'var(--base-button-height)',
                        }}>
                        <BiEdit size='16' />
                    </IconButton>
                    <AlertDialog.Root open={open} onOpenChange={setOpen}>
                        <AlertDialog.Trigger>
                            <IconButton
                                variant="ghost"
                                color="red"
                                aria-label="Click to delete webhook"
                                title='Delete webhook'
                                onClick={() => { }}
                                style={{
                                    // @ts-ignore
                                    '--icon-button-ghost-padding': '0',
                                    height: 'var(--base-button-height)',
                                    width: 'var(--base-button-height)',
                                }}>
                                <BiTrash size='16' />
                            </IconButton>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content className={DIALOG_CONTENT_CLASS}>
                            <AlertContent doctype="Raven Scheduler Event" docname={item.name} onClose={onClose} />
                        </AlertDialog.Content>
                    </AlertDialog.Root>
                </Flex>
            </Flex>
        </Flex>
    )
}
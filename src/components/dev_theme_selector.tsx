import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { Themes } from '../themes/details';
import { useThemeStore } from '../themes/state';

export default function DevThemeSelector() {
    const activeTheme = useThemeStore((state) => state.activeTheme);
    const setActiveTheme = useThemeStore((state) => state.setActiveTheme);

    return (
        <div className="fixed bottom-4 right-4">
            <Listbox value={activeTheme} onChange={setActiveTheme}>
                <div className="flex flex-col-reverse">
                    <Listbox.Button className="flex w-32 items-center justify-between rounded-md bg-zinc-700 p-2 text-left text-zinc-50">
                        <span className="">{activeTheme}</span>
                        <ChevronUpDownIcon className="ml-2 inline-block h-4 w-4" />
                    </Listbox.Button>
                    <Listbox.Options as="div" className="mb-2">
                        {Object.values(Themes).map((theme) => (
                            <Listbox.Option key={theme} value={theme} as={Fragment}>
                                {({ active, selected }) => (
                                    <div
                                        className={`flex items-center justify-between p-2 text-zinc-100 first:rounded-t-md last:rounded-b-md ${
                                            active ? 'bg-zinc-800' : 'bg-zinc-600'
                                        }`}
                                    >
                                        {theme}
                                        {selected && <CheckIcon className="h-4 w-4" />}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
}

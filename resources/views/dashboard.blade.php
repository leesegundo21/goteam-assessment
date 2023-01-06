<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        {{ $users->links() }}
        <!-- <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="space-y-5">
                        <div class="w-100 bg-white shadow rounded">
                            w-96
                        </div>
                        <div class="w-50 shadow rounded bg-sky-900 text-white pl-3 pr-3 pt-1 pb-1">
                            w-80
                        </div>
                        <div class="w-72 bg-white shadow rounded">
                            w-72
                        </div>
                        <div class="w-64 bg-white shadow rounded">
                            w-64
                        </div>
                        <div class="w-60 bg-white shadow rounded">
                            w-60
                        </div>
                        <div class="w-56 bg-white shadow rounded">
                            w-56
                        </div>
                        <div class="w-52 bg-white shadow rounded">
                            w-52
                        </div>
                        <div class="w-48 bg-white shadow rounded">
                            w-48
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</x-app-layout>

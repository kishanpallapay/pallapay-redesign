import * as React from "react";
import {
  MoreHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
const PaginationSelect = ({
  value = "10",
  onChange,
  options = [10, 25, 50, 100],
}: {
  value: string;
  onChange: (e: string) => void;
  options?: number[];
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="border-gray-100 text-gray-700">
        <SelectValue placeholder={`${value} / Page`} />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt} value={String(opt)}>
            {opt} / Page
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

// Base Pagination Components
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  disabled,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled}
      data-slot="pagination-link"
      data-active={isActive}
      data-disabled={disabled}
      className={cn(
        buttonVariants({
          variant: isActive ? "primary" : "outline",
          size,
        }),
        {
          "bg-orange-200 hover:bg-orange-400": isActive,
          "pointer-events-none opacity-50 cursor-not-allowed": disabled,
        },
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      disabled={disabled}
      className={cn(
        "gap-1 px-2.5 sm:pl-2.5",
        buttonVariants({
          variant: "ghost",
        }),
        className
      )}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      disabled={disabled}
      className={cn(
        "gap-1 px-2.5 sm:pr-2.5",
        buttonVariants({
          variant: "ghost",
        }),
        className
      )}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

// Smart Pagination Component with Ellipsis Management
interface SmartPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
  className?: string;
  itemsPerPage?: number;
  onItemsPerPageChange?: (n: number) => void;
  perPageOptions?: number[];
}

function SmartPagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  itemsPerPage = 10,
  onItemsPerPageChange,
  perPageOptions = [10, 25, 50, 100],
  maxVisiblePages = 3,
  className,
}: SmartPaginationProps) {
  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  // Calculate visible page numbers with improved logic
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - halfVisible);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  // Improved ellipsis logic - don't show both at the same time when possible
  const showStartEllipsis = showFirstLast && visiblePages[0] > 1;
  const showEndEllipsis =
    showFirstLast && visiblePages[visiblePages.length - 1] < totalPages;

  // If we're showing start ellipsis, prioritize that and be more conservative with end ellipsis
  const shouldShowStartEllipsis = showStartEllipsis && visiblePages[0] > 2;
  const shouldShowEndEllipsis =
    showEndEllipsis && visiblePages[visiblePages.length - 1] < totalPages - 1;

  // If both would show, prioritize based on current page position
  const currentPagePosition = currentPage / totalPages;
  let finalShowStartEllipsis = shouldShowStartEllipsis;
  let finalShowEndEllipsis = shouldShowEndEllipsis;

  // If both ellipses would show and we have limited space, prioritize one
  if (
    shouldShowStartEllipsis &&
    shouldShowEndEllipsis &&
    maxVisiblePages <= 3
  ) {
    if (currentPagePosition < 0.5) {
      // Closer to start, show end ellipsis
      finalShowStartEllipsis = false;
    } else {
      // Closer to end, show start ellipsis
      finalShowEndEllipsis = false;
    }
  }

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  // When only one page, still show per-page control if available
  if (totalPages <= 1) {
    return (
      <div className="flex items-center justify-start gap-3 w-full">
        {onItemsPerPageChange && (
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="font-exo2-regular">Rows per page:</span>
            <PaginationSelect
              value={String(itemsPerPage)}
              onChange={(v: string) => onItemsPerPageChange(Number(v))}
              options={perPageOptions}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 w-full">
      <Pagination className={className}>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer text-gray disabled:text-gray-100"
              disabled={isPreviousDisabled}
              onClick={() => handlePageClick(currentPage - 1)}
            />
          </PaginationItem>

          {/* First Page and Start Ellipsis */}
          {showFirstLast && visiblePages[0] > 1 && (
            <>
              <PaginationItem>
                <PaginationLink
                  className="cursor-pointer border-gray-100 text-black hover:border-orange"
                  onClick={() => handlePageClick(1)}
                  isActive={currentPage === 1}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              {finalShowStartEllipsis && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}

          {/* Visible Page Numbers */}
          {visiblePages.map(page => (
            <PaginationItem key={page}>
              <PaginationLink
                className="cursor-pointer border-gray-100 text-black hover:border-orange"
                onClick={() => handlePageClick(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* End Ellipsis and Last Page */}
          {showFirstLast &&
            visiblePages[visiblePages.length - 1] < totalPages && (
              <>
                {finalShowEndEllipsis && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    className="cursor-pointer border-gray-100 text-black hover:border-orange"
                    onClick={() => handlePageClick(totalPages)}
                    isActive={currentPage === totalPages}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              disabled={isNextDisabled}
              className="cursor-pointer text-gray disabled:text-gray-100"
              onClick={() => handlePageClick(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {onItemsPerPageChange && (
        <PaginationSelect
          value={String(itemsPerPage)}
          onChange={(v: string) => onItemsPerPageChange(Number(v))}
          options={perPageOptions}
        />
      )}
    </div>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  SmartPagination,
};
